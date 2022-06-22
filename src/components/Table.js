import React from "react"

export default function Table({list,assesableValue,vat,totalValue}) {
  return (
    <>
   <table width="100%" className="mt-16 mb-0 font-bold">
            <thead style={{ border: '2px solid rgba(0,0,0,0.5)' }}>
                             <tr>
                                 <td className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>No.</td>
                                 <td  className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>PARTICULARS</td>
                                 <td  className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>QTY</td>
                                 <td  className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>PRICE</td>
                                 <td  className="font-bold" style={{ border: '2px solid rgba(0,0,0,0.5)' }}>AMOUNT</td>
                 
                             </tr>
                         </thead>
                {list.map(({id,particulars,number,quantity,price,amount})=>(
                    <React.Fragment key={id}>
                    
                   
                         <tbody >
                         <tr>
                                 <td style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{number}</td>
                                 <td style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{particulars}</td>
                                 <td style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{quantity}</td>
                                 <td style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{price}</td>
                                 <td style={{ border: '2px solid rgba(0,0,0,0.5)' }}>{amount}</td>
                 
                             </tr>
                 
                         </tbody>
                         </React.Fragment>
                         
                         ))} 
                    </table>
                    <div>
                    <h2 style={{ border: '2px solid rgba(0,0,0,0.5)' }} className="font-bold flex items-end justify-end text-grey-800 text-xl">Assesable Value|   {assesableValue}</h2>
                        <h2 style={{ border: '2px solid rgba(0,0,0,0.5)' }} className="font-bold flex items-end justify-end text-grey-800 text-xl">5% VAT|   {vat}</h2>
                        <h2 style={{ border: '2px solid rgba(0,0,0,0.5)' }} className="font-bold flex items-end justify-end text-grey-800 text-xl">Total Value|  {totalValue}</h2>
                    </div>
                 

    </>
  )
}
