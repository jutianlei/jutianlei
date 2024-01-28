import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { message } from "antd";
import { useBearStore } from "@/store";
import { captchaSent, captchaVerify, loginCellphone } from "@/api";
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const SimpleDialog = (props: SimpleDialogProps) => {
  const { onClose, open } = props;
  const [userPhone, setUserPhone] = useState("");
  const [code, setCode] = useState<string>("");
  const [timer, setTimer] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [userInfo, setUserInfo] = useBearStore((state) => [
    state.userInfo,
    state.setUserInfo,
  ]);
  useEffect(() => {
    let interval: any;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  /**
   *
   * @returns 获取验证码
   */
  const getCaptchaSent = async (data: string) => {
    await captchaSent({ phone: data });
  };

  /**
   *
   * @returns 验证验证码是否正确
   */
  const getCaptchaVerify = async (
    phone: string,
    code: string,
    callback: any = () => {}
  ) => {
    const res = await captchaVerify({ phone: phone, captcha: code });
    callback(res);
  };
  const handleGetCode = () => {
    if (userPhone === "") {
      messageApi.open({
        type: "warning",
        content: "手机号码为空",
      });
      return;
    } else {
      getCaptchaSent(userPhone);
    }
    setTimer(59);
    setOpenDialog(true);
  };

  const handleLogin = async () => {
    await getCaptchaVerify(userPhone, code, async (data: boolean) => {
      if (data) {
        const res = await loginCellphone({ phone: userPhone, captcha: code });
        const token = res.token;
        const cookie = res.cookie;
        const { id } = res.account;
        const { avatarUrl, nickname } = res.profile;
        localStorage.setItem(
          "accountInfo",
          JSON.stringify({ token, cookie, avatarUrl, nickname, id })
        );
        setUserInfo({ token, cookie, avatarUrl, nickname, id });
      } else {
        messageApi.open({
          type: "warning",
          content: "验证码错误",
        });
      }
    });
  };
  useEffect(() => {}, []);
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      onClose={onClose}
    >
      {contextHolder}
      <div className="p-3 bg-gradient-to-r from-blue-200 to-blue-100">
        <div className="py-1 flex justify-end px-5 text-xl">
          <span className=" cursor-pointer" onClick={onClose}>
            X
          </span>
        </div>
        <DialogContent className="text-white">
          <div className="w-full px-5 pb-10 text-center text-3xl text-cyan-500 font-bold">
            <i className="iconfont wyyyinle text-6xl"></i>
          </div>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="用户名"
                variant="outlined"
                fullWidth
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
              />
            </Grid>
            <Grid item container spacing={2} alignItems="center">
              <Grid item xs={10}>
                <TextField
                  label="验证码"
                  type="text"
                  variant="outlined"
                  fullWidth
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  disabled={timer > 0}
                  onClick={handleGetCode}
                >
                  {timer > 0 ? `${timer}s` : "验证码"}
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
              >
                登录
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <div className="flex justify-center text-sm items-center py-3">
          <Checkbox {...label} size="small" defaultChecked />
          同意用户隐私政策,<span className="pl-3">归属权归小情所有</span>
        </div>
      </div>
    </Dialog>
  );
};

export const Login = () => {
  const [open, setOpen] = React.useState(false);
  const [userInfo] = useBearStore((state) => [state.userInfo]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="w-[30%] flex justify-end items-center">
      <img
        src={
          userInfo?.avatarUrl
            ? userInfo.avatarUrl
            : "https://img1.baidu.com/it/u=2494495472,3629111731&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        }
        alt=""
        className="w-8 h-8 rounded-full cursor-pointer"
        onClick={() => {
          if (userInfo?.token) {
            return;
          }
          handleClickOpen();
        }}
      />
      <span className="pl-3 text-slate-500/65  cursor-pointer">
        {userInfo?.nickname ? userInfo.nickname : "请先登录"}
      </span>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};
