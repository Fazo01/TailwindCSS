const express=require("express")
const path=require("path")
const app=express()
const hostRouter=require("./Routes/hostRouter")
const useRouter=require("./Routes/useRouter")
const rootDir=require("./utils/utilPath")

app.use(express.static(path.join(rootDir,"public")))
app.use((req,res,next)=>{
  console.log(req.method)
  next()
})
app.use(useRouter)
app.use("/host",hostRouter)
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,"Views","page_404.html"))
})
const PORT=3000
app.listen(PORT,()=>{
  console.log(`Server Link http://localhost:${PORT}`)
})