import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function AddComment() {
  return (
    <>
        <Form>
            <Form.Group>
                <Form.Control className='my-3' placeholder='Inscerisci il tuo commento'/>
                <span>Valutazione: </span>
                <input type='number' className='text-center' min={1} max={5} step={1} placeholder='1'/>
            </Form.Group>
            <div className='text-end'>
                <Button className='mt-2'>Invia</Button>
            </div>
        </Form>
    </>
  )
}
