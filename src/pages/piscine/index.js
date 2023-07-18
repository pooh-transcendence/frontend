import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from 'next/link'

async function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

function Get() {
    const [res, setRes] = useState(undefined);
    const router = useRouter();

    useEffect(() => {
        const func = async () => {
            return await axios.get("https://api.intra.42.fr/v2/cursus_users/graph?filter[campus_id]=29&filter[end_at]=2023-08-11T14:42:00.000Z&interval=year", {
                headers: {
                    "Authorization": localStorage.getItem("42_token_type") + " " + localStorage.getItem("42_acc_token")
                },
            })
                .then(async (res) => {
                    let ret = [];
                    console.log(res.data["2023-01-01"]);
                    const cnt = +res.data["2023-01-01"];
                    await sleep(500);
                    for (let i = 1; i <= Math.trunc((cnt + 29) / 30); i++) {
                        axios.get("https://api.intra.42.fr/v2/cursus/9/cursus_users", {
                            params: {
                                "filter[campus_id]": 29,
                                "page": i,
                                "filter[end_at]": "2023-08-11T14:42:00.000Z", // 10-1 piscine end date
                            },
                            headers: {
                                "Authorization": localStorage.getItem("42_token_type") + " " + localStorage.getItem("42_acc_token")
                            },
                        })
                            .then((apiRes) => {
                                if (apiRes.data.length == 0) flag = true;
                                else ret.push(...apiRes.data);
                            })
                            .catch((error) => {
                                throw (error);
                            });
                        await sleep(550);
                    }

                    while (ret.length != cnt) {
                        await sleep(100);
                    }

                    return ret;
                })
                .catch((error) => {
                    console.log(error);
                    router.push("/login");
                });
        }
        func().then((res) => {
            res.sort((a, b) => (b.level - a.level));
            setRes(res)
        })
        .catch((error) => console.log(error));
        console.log(res);
    }, [router]);

    return (
        <>
            <Link href="/">Home</Link>
            <br />
            <pre>
                {
                    res ? res.map((val, idx) => {
                        return (
                            <div key={idx}>
                                {String(idx + 1).padStart(3, "0")}. {val.level}lv, {val.user.login}
                                <br />
                            </div>
                        )
                    }) : "so babo 42api..\nplease wait"
                }
            </pre>
        </>
    )
}

export default Get;