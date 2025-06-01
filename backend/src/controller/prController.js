import { StatusCodes } from "http-status-codes"
import { addPrService, deletePrService, editPrService, getAllPrsService, getPrService } from "../models/prModel.js";

export const getAllPrs = async (req, res, next) => {
    const {userId} = req.user;
    const prs = await getAllPrsService(userId)
    res.status(StatusCodes.OK).json({prs, count:prs.length})
}

export const addPr = async (req, res, next) => {
    const {userId} = req.user
    const {exerciseName, weight} = req.body
    const pr = await addPrService(userId, exerciseName, weight)
    res.status(StatusCodes.CREATED).json({pr})
}

export const getPr = async (req, res, next) => {
    const {userId} = req.user 
    const {id:prId} = req.params
    const pr = await getPrService(prId, userId)
    res.status(StatusCodes.OK).json({pr})
}

export const editPr = async (req, res, next) => {
    const {userId} = req.user
    const {id:prId} = req.params
    const {exerciseName, weight} = req.body
    const pr = await editPrService(prId, userId, exerciseName, weight)
    res.status(StatusCodes.CREATED).json({pr})
}

export const deletePr = async (req, res, next) => {
    const {userId} = req.user
    const {id:prId} = req.params
    const pr = await deletePrService(prId, userId)
    res.status(StatusCodes.OK).send(pr)
}