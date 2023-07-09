import express from 'express'
import chatInternalGroupsGet from '../controllers/chatInternalGroupsGet.js'
import chatInternalMessagesCreate from '../controllers/chatInternalGroupsCreate.js'
import chatInternalMessagesGet from '../controllers/chatInternalMessagesGet.js'

const router = express.Router()

router.get('/groups', chatInternalGroupsGet)
// router.get('/groups/:groupId', chatInternalGroupsGetData)
// router.post('/groups', chatInternalGroupsCreate)
// router.post('/groups/:groupId', chatInternalGroupEdit)

router.get('/', chatInternalMessagesGet)
router.post('/', chatInternalMessagesCreate)
// router.post('/:messageId', chatInternalMessagesEdit)

export default router