import { ReactNode } from "react"
import { TUserPaths } from "../types"

type TRou ={
    path:string
    element:ReactNode
}



export const routerGenerator=(items:TUserPaths[])=>{
     const route = items.reduce((acc:TRou[],item)=>{
        if(item.path && item.element){
            acc.push({
                path:item.path,
                element:item.element
            })
        }
        if(item.children){
            item.children.forEach((child)=>{
                acc.push({
                    path:child.path!,
                    element:child.element
                })
            })
        }
    
        return acc
    },[])
    return route
}