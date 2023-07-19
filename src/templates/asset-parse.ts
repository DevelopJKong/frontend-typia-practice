import typia from "typia";
import { IMember } from "../interface/main.interface";
const json: string = JSON.stringify(typia.random<IMember>());
const parsed: IMember = typia.assertParse<IMember>(json);
console.log(json === JSON.stringify(parsed));
