import * as express from "express";
import SampleService from '../services/SampleService'

let router: express.Router = express.Router()
let service: SampleService = new SampleService()


router.use(express.json())

router.get('/inventory', (req, res) =>{
  res.status(200).json('service is running..')

})

router.put('/inventory', (req, res) =>{
  res.status(200).json('service is running..')
})

router.delete('/inventory', (req, res) =>{
  res.status(200).json('service is running..')
})

export = router