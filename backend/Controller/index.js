let model = require('../Model/index')

// fetching all users
exports.getNames = async (req, res) => {

    try {
        const list = await model.find({});
        if (!list) {
            res.status(505).json({
                message: 'there is no name'
            })
        } else {
            res.status(200).json({
                list
            })
        }

    } catch (error) {
        console.log(error);
    }

}

//creating users
exports.setNames = async (req, res) => {

    try {

           console.log(req.body);
        const name = req.body.user;
        const details = new model({
            user: name
        })
        const names = await details.save();
        res.status(201).json({
            messages: names
        })


    } catch (error) {
        res.status(402).json({
            message:error
        })
    }

}

//deleting users by id
exports.deleteNameById = async (req,res) => {
    try {
        const id = req.params.id;
        await model.findByIdAndDelete(id);
        res.status(200).json({
            message:'Item Deleted'
        })
        
    } catch (error) {
        res.status(402).json({
            message:error
        })
    }
}

//editing user by id
exports.editById = async (req,res) =>{
    try {
        const name = req.body.user;
        const id = req.params.id;
        const updated = await model.findByIdAndUpdate(id,{user:name},{new:true});

        res.status(200).json({
            message:updated
        })
    } catch (error) {
        res.status(401).json({
            message:error
        })
    }
}