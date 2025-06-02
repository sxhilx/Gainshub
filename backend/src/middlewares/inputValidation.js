import Joi from "joi"

export const userSchema = Joi.object({
    fullname: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
})

export const workoutSchema = Joi.object({
    trainingWeek: Joi.number().integer().required(),
    movementType: Joi.string().min(2).required(),
    exerciseName: Joi.string().min(2).required(),
    weight: Joi.number().min(1).required(),
    sets: Joi.number().min(1).required(),
    reps: Joi.string().required()
})

export const prSchema = Joi.object({
    exerciseName: Joi.string().min(2).required(),
    weight: Joi.number().required(),
})

export const validateInput = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.body, {abortEarly: false});

    if(error){
        const details = error.details.map((err) => err.message)
        return res.status(400).json({msg: details})
    }
    next()
}