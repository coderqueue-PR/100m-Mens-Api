const express = require('express');
const router = new express.Router();


const MensRanking = require('../models/mensrace');

//we will handle post request and call the create method
router.post("/mensrace" , async(req,res)=>{
    try {
        const addingMensRecords = new MensRanking(req.body);
     
      const insertMens = await  addingMensRecords.save();
      res.status(201).send(insertMens);
    } catch (e) {
        res.status(400).send(e);
    }
})
//we will handle get request and call the get method for read the data
router.get("/mensrace" , async(req,res)=>{
    try {
       const getmens = await MensRanking.find({}).sort({"ranking":1}); 
      res.send(getmens);
    } catch (e) {
        res.status(400).send(e);
    }
})

//we will handle get request and find the data by id
router.get("/mensrace/:id" , async(req,res)=>{
    try {
        const _id = req.params.id;
       const getmenid = await MensRanking.findById(_id); 
      res.send(getmenid);
    } catch (e) {
        res.status(400).send(e);
    }
})

//we will update the api using patch request method
router.patch("/mensrace/:id" , async(req,res)=>{
    try {
        const _id = req.params.id;
       const updatemen = await MensRanking.findByIdAndUpdate(_id,req.body,{
           new:true
       }); 
      res.send(updatemen);
    } catch (e) {
        res.status(500).send(e);
    }
})

//we will handle the delete request
router.delete("/mensrace/:id" , async(req,res)=>{
    try {
       const updatemen = await MensRanking.findByIdAndDelete(req.params.id); 
      res.send(updatemen);
    } catch (e) {
        res.status(500).send(e);
    }
})

module.exports = router;