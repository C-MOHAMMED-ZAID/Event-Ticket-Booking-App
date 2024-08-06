const express = require("express")
const router = express.Router();
// Employee Model
let bookingSchema = require("../models/Booking");
// CREATE Employee
router.route("/create-booking").post(async (req, res, next) => {
 await bookingSchema
 .create(req.body)
 .then((result) => {
 res.json({
 data: result,
 message: "Data successfully added!",
 status: 200,
 });
 })
 .catch((err) => {
 return next(err);
 });
});

router.route("/").get(async(req,res,next)=>{
    const page_size=5
    const page=parseInt(req.query.page||"0")
    const totalRecords=await bookingSchema.countDocuments({})
    await bookingSchema.find()
    .find().limit(page_size).skip(page_size*page)
    .then((result)=>{
        res.json({
            data:result,
            total:Math.ceil(totalRecords /page_size),
            message:"All items successfully fetched.",
            status:200,
        })
    })
    .catch((err)=>{
        return next(err)
    })
})

router.route("/delete-booking/:id").delete(async(req,res,next)=>{
    await bookingSchema.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.json({
            msg:"Data successfully updated.",
        })
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.route("/get-booking/:id").get(async(req,res,next)=>{
    await bookingSchema.findById(req.params.id)
    .then((result)=>{
        res.json({
            data:result,
            message:"Data successfully fetched",
            status:200,
        })
    })
    .catch((err)=>{
        return next(err)
    })
})

router.route("/update-booking/:id").put(async(req,res,next)=>{
    await bookingSchema.findByIdAndUpdate(req.params.id,{
        $set:req.body,
    })
    .then((result)=>{
        res.json({
            data:result,
            message:"Data successfully updated",
        })
    })
    .catch((err)=>{
        return next(err)
    })
})
module.exports = router; 