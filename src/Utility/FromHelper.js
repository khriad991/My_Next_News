
import toast from "react-hot-toast";
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
class FromHelper {
    IsEmpty(value){
        return value.length === 0 ;
    }
    IsMobile(value){
        return MobileRegx.test(value);
    }
    IsEmail(value){
        return !emailRegex.test(value);
    }
    ErrorToast(msg){
        toast.error(msg)
    }
    SuccessToast(msg){
        toast.success(msg)
    }
}
export const {IsEmpty,IsMobile,IsEmail,ErrorToast,SuccessToast} = new FromHelper()