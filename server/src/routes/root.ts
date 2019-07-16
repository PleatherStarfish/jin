import express, { Router, Request, Response, NextFunction } from "express";
const router: express.Router = express.Router();

router
    .route("/")
    .get((req: Request, res: Response) => {
        res.status(200).json({
            message: "GET request to root."
        });
    });
router
    .route("/dashboard")
    .get((req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            message: "GET dashboard."
        });
    });

export = router;