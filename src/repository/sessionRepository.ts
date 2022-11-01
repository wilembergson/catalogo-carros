import { Session } from "@prisma/client"

import prisma from "../config/database.js"

export type SessionInsertData = Omit<Session, "id">

async function insert(session: SessionInsertData){
    return await prisma.session.create({
        data: session
    })
}

const sessionRepository = {
    insert
}
export default sessionRepository