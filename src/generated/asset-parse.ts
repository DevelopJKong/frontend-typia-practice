import typia from "typia";
const json: string = JSON.stringify(((generator?: Partial<typia.IRandomGenerator>): typia.Primitive<IMember> => {
    const $generator = (typia.random as any).generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
        id: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "format",
                value: "uuid"
            }
        ]) ?? (generator?.uuid ?? $generator.uuid)(),
        email: (generator?.customs ?? $generator.customs)?.string?.([
            {
                name: "format",
                value: "email"
            }
        ]) ?? (generator?.email ?? $generator.email)(),
        age: (generator?.customs ?? $generator.customs)?.number?.([
            {
                name: "exclusiveMinimum",
                value: "19"
            },
            {
                name: "maximum",
                value: "100"
            }
        ]) ?? (generator?.number ?? $generator.number)(19, 100)
    });
    return $ro0();
})());
const parsed: IMember = ((input: string): typia.Primitive<IMember> => { const assert = (input: any): IMember => {
    const __is = (input: any): input is IMember => {
        const $is_uuid = (typia.assertParse as any).is_uuid;
        const $is_email = (typia.assertParse as any).is_email;
        return "object" === typeof input && null !== input && ("string" === typeof (input as any).id && $is_uuid((input as any).id) && ("string" === typeof (input as any).email && $is_email((input as any).email)) && ("number" === typeof (input as any).age && 19 < (input as any).age && 100 >= (input as any).age));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is IMember => {
            const $guard = (typia.assertParse as any).guard;
            const $is_uuid = (typia.assertParse as any).is_uuid;
            const $is_email = (typia.assertParse as any).is_email;
            const $ao0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ("string" === typeof input.id && ($is_uuid(input.id) || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string (@format uuid)",
                value: input.id
            })) || $guard(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            })) && ("string" === typeof input.email && ($is_email(input.email) || $guard(_exceptionable, {
                path: _path + ".email",
                expected: "string (@format email)",
                value: input.email
            })) || $guard(_exceptionable, {
                path: _path + ".email",
                expected: "string",
                value: input.email
            })) && ("number" === typeof input.age && (19 < input.age || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number (@exclusiveMinimum 19)",
                value: input.age
            })) && (100 >= input.age || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number (@maximum 100)",
                value: input.age
            })) || $guard(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            }));
            return ("object" === typeof input && null !== input || $guard(true, {
                path: _path + "",
                expected: "IMember",
                value: input
            })) && $ao0(input, _path + "", true) || $guard(true, {
                path: _path + "",
                expected: "IMember",
                value: input
            });
        })(input, "$input", true);
    return input;
}; input = JSON.parse(input); return assert(input) as any; })(json);
console.log(json === JSON.stringify(parsed));
interface IMember {
    /**
     * @format uuid
     */
    id: string;
    /**
     *  @format email
     */
    email: string;
    /**
     * @exclusiveMinimum 19
     * @maximum 100
     */
    age: number;
}
