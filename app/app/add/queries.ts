"use server";

import {z} from "zod";
import {zfd} from "zod-form-data";

import {action} from "@/lib/safe-action";

const schema = zfd.formData({
  email: zfd.text(z.string().email()),
  password: zfd.text(z.string().min(8)),
});
