import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"

export default function TableForm({ particulars, setParticulars, amount, setAmount, price, setPrice, quantity, setQuantity, number, setNumber, list, setList, assesableValue, setAssesableValue, vat, setVat, totalValue, setTotalValue }) {
    const [isEditing, setIsEditiing] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!particulars || !number || !quantity || !price) {
            alert("Please fill in all")

        } else {


            const newItems = {
                id: uuidv4(),
                number,
                particulars,
                quantity,
                price,
                amount,

            }

            setNumber("")
            setParticulars("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems])
            setIsEditiing(false)
        }
    }
    useEffect(() => {
        const calculateAmount = (amount) => {
            setAmount(quantity * price)
        }
        calculateAmount(amount)
    }, [amount, price, quantity, setAmount])

    useEffect(() => {
        let rows = document.querySelectorAll(".amount")
        let sum = 0
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].className === "amount") {
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                setAssesableValue(sum)
            }
        }
    })
    useEffect(() => {
        const calculateAmount = (vat) => {
            setVat(assesableValue * 1 / 20)
        }
        calculateAmount(vat)
    }, [assesableValue, vat, setVat])

    useEffect(() => {
        const calculateAmount = (totalValue) => {
            setTotalValue(assesableValue + vat)
        }
        calculateAmount(totalValue)
    }, [totalValue, setTotalValue, assesableValue, vat])

    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id)
        setList(list.filter((row) => row.id !== id))
        setIsEditiing(true)
        setNumber(editingRow.number)
        setParticulars(editingRow.particulars)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
    }

    const deleteRow = (id) => setList(list.filter((row) => row.id !== id))


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col md:mt-16">
                    <label htmlFor="number">Item Number</label>
                    <input type="number" name="number" id="number" placeholder="Item number" value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="particulars">Particulars</label>
                    <input type="text" name="particulars" id="particulars" placeholder="Particulars" value={particulars} onChange={(e) => setParticulars(e.target.value)} />
                </div>
                <div className="md:grid grid-cols-3 gap-10">
                    <div className="flex flex-col">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text" name="quantity" id="quantity" placeholder="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price">Price</label>
                        <input type="text" name="price" id="price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="amount">Amount</label>
                        <p>{amount}</p>
                    </div>
                </div>
                <button type="submit" className="mt-5 mb-10 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300" > {isEditing ? "Editing Row Item" : "Add Table Item"}</button>
            </form>
            <table width="100%" className="mb-10">
                <thead style={{ border: '2px solid rgba(0,0,0,0.5)' }}>
                    <tr>
                        <td className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>No.</td>
                        <td className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>PARTICULARS</td>
                        <td className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>QTY</td>
                        <td className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>PRICE</td>
                        <td className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>AMOUNT</td>

                    </tr>
                </thead>
                {list.map(({ id, particulars, number, quantity, price, amount }) => (
                    <React.Fragment key={id}>


                        <tbody >
                            <tr>
                                <td style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{number}</td>
                                <td style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{particulars}</td>
                                <td style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{quantity}</td>
                                <td style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{price}</td>
                                <td className="amount" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{amount}</td>
                                <td><button onClick={() => deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl" /></button></td>
                                <td>
                                    <button onClick={() => editRow(id)}><AiOutlineEdit className="text-green-500 font-bold text-xl" /></button>
                                </td>
                            </tr>

                        </tbody>
                    </React.Fragment>

                ))}
            </table>
            <div>
                <h2 style={{ border: '2px solid rgba(0,0,0,0.5)' }} className="font-bold flex items-end justify-end text-grey-800 text-xl">Assesable Value|{assesableValue}</h2>
                <h2 style={{ border: '2px solid rgba(0,0,0,0.5)' }} className="font-bold flex items-end justify-end text-grey-800 text-xl">5% VAT|{vat}</h2>
                <h2 style={{ border: '2px solid rgba(0,0,0,0.5)' }} className="font-bold flex items-end justify-end text-grey-800 text-xl">Total Value|{totalValue}</h2>
            </div>



        </>
    )
}
