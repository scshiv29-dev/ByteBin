import { NextResponse } from "next/server"
import { NextApiRequest,NextApiResponse } from "next"

export async function POST(req:Request){
    const data  =await req.json()
    console.log(data)

    return NextResponse.json(data)
}