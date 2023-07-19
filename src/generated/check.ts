import typia from "typia";
import { IMember } from "../interface/main.interface";
export const check = (input: any): input is IMember => {
    const $is_email = (typia.createIs as any).is_email;
    return "object" === typeof input && null !== input && ("string" === typeof (input as any).email && $is_email((input as any).email) && ("number" === typeof (input as any).age && 19 < (input as any).age && 99 >= (input as any).age));
};
