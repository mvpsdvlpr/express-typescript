import express from 'express';
import * as diaryServices from '../services/diaryServices'


const ROUTER = express.Router()

ROUTER.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo());
})

ROUTER.get('/', (_req, res) => {
    res.send('Saving a diary!');
});

export default ROUTER