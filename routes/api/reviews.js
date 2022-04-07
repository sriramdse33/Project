// 1. Import dependencies
const express =  require('express')
const router = express.Router()

const Review =  require('../../models/review')
const User = require('../../models/user')



//Gettig all
router.get("/", async (req, res) => {
    try
    { 
       const reviews = await Review.find({});
       res.json(reviews)
    }catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }

})

//Getting one
router.get("/:uid", getReviewByUid, (req, res) => {
    // console.log(req.params.id)
    res.send(res.review);
})


//Creating one
router.post("/:uid", async (req, res) => {
    let userId, reviewByUid;
    userId  = await User.findById(req.params.uid)
    if(userId == null){
        return res.status(404).json({message: 'User ID cannot be found' });
    }
    const review = new Review({
        "review": req.body.review,
        "user_id": userId.name.first+" "+userId.name.last,
        "rating": req.body.value
    })
    console.log(req);
    try{
        const newReview = await review.save(function(err){
            if(err){
                 console.log(err);
                 return;
            }
            console.log("review Created Successfully");
            res.status(201).json({review: newReview, message:"Review posted successfully"})
      });
    }catch(err){
        res.status(400).json({error: err.message})
    }
})


async function getReview(req, res, next){
    let review;
    try{
        review = await Review.findById(req.params.id)
        if(review == null){
            return res.status(404).json({message: 'Cannot Find review'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.review = review;
    next()
}


async function getReviewByUid(req, res, next){
    console.log(req.params.uid)
    let user;
    let review;
    try{
        user = await User.findById(req.params.uid)
        if(user == null){
            return res.status(404).json({message: 'User ID cannot be found' });
        }else{
            review = await Review.find({user_id: req.params.uid}, (err, data)=>{
                if(err){
                    console.log(err);
                    return res.status(404).json({message: 'No Review Exists with specified User ID' });
                }else{
                    review = data;
                }
            })
        }

    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.review = review;
    next()
}



module.exports = router