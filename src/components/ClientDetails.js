

export default function ClientDetails({customerName,customerAddress,date,phone,mobile,invoiceNumber}) {
  return (
    <>
         <section style={{ border: '2px solid rgba(0,0,0,0.5)' }} className="mt-5 p-3">
          <div className="float-left">
            <span><h2 className="font-bold">Customer Name:{customerName}</h2></span>
          </div>
          <div className="flex flex-col items-center">
            <span><h2 className="font-bold">Date: {date}</h2></span>
          </div>
          <div className="float-left">
            <span><h2 className="font-bold">Phone: {phone}</h2></span>
          </div>
          <div className="flex flex-col items-center">
            <span><h2 className="font-bold">Mobile: {mobile}</h2></span>
          </div>
          <div className="float-left">
            <span> <h2 className="font-bold">INV No: {invoiceNumber}</h2></span>
          </div>
          <div className="flex flex-col items-center">
            <span><h2 className="font-bold">Address: {customerAddress}</h2></span>
          </div>
        </section>
    </>
  )
}
