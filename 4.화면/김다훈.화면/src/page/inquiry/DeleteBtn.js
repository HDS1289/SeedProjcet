import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function DeleteBtn () {
    const [show, setShow] = useState(false)

    const onClose = () => setShow(false)
    const onShow = () => setShow(true)

    return (
        <>
            <Button variant='warning' className='inquiryDeleteBtn me-2' onClick={onShow}>삭제</Button>

            <Modal show={show} onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>문의 삭제</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                해당 문의를 삭제하시겠습니까?<br/>
                {'('}해당문의가 삭제되며 복구할 수 없습니다.{')'}
                    <div className='d-flex justify-content-end'>
                        <Button variant='warning' className='deleteNoBtn me-2' onClick={onClose}>
                            아니오
                        </Button>
                        <a href='/inquiryDeleteComplete'>
                            <Button variant='warning' className='deleteYesBtn'>
                                예
                            </Button>
                        </a>
                    </div>
                </Modal.Body>      
            </Modal>
        </>
    )
}

export default DeleteBtn