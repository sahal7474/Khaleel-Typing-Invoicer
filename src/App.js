import ClientDetails from "./components/ClientDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/Table";
import { useState,useRef} from 'react';
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print"


function App() {

  const [showInvoice, setShowInvoice] = useState(false)
  const[customerName,setCustomerName]=useState("")
  const[customerAddress,setCustomerAddress]=useState("")
  const[date,setDate]=useState("")
  const[mobile,setMobile]=useState("")
  const[phone,setPhone]=useState("")
  const[invoiceNumber,setInvoiceNumber]=useState("")
  const[number,setNumber]=useState("")
  const[particulars,setParticulars]=useState("")
  const[quantity,setQuantity]=useState("")
  const[price,setPrice]=useState("")
  const[amount,setAmount]=useState("")
  const[list,setList]=useState([])
  const[assesableValue,setAssesableValue] = useState(0)
  const[vat,setVat]=useState(0)
  const[totalValue,setTotalValue]=useState(0)
  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
       
        {showInvoice ? ( <>
          <ReactToPrint trigger={()=> <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print / Download</button>} content={()=>componentRef.current}/>
          <div ref={componentRef} className="p-5">

<Header handlePrint={handlePrint} />

<ClientDetails customerName={customerName} customerAddress={customerAddress} date={date} mobile={mobile} phone={phone} invoiceNumber={invoiceNumber} />
<Table particulars={particulars} number={number} quantity={quantity} price={price} amount={amount} list={list} setList={setList} assesableValue={assesableValue} setAssesableValue={setAssesableValue} vat={vat} setVat={setVat} totalValue={totalValue} setTotalValue={setTotalValue}/>
<Footer />

</div>
<button onClick={()=>setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
       </> ):(
        
          <>
          {/*customer name, date,address,mobile,phone,invoice number*/}
          <div className="flex flex-col justify-center"> 
          <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
          <label htmlFor="Name">Enter customer name</label>
          <input type="text" name="text" id="customerName" placeholder="Enter customer name" autoComplete="off" value={customerName} onChange={(e)=>setCustomerName(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="Address">Enter customer Address</label>
          <input type="text" name="text" id="customerAddress" placeholder="Enter customer address" autoComplete="off" value={customerAddress} onChange={(e)=>setCustomerAddress(e.target.value)}/>
          </div>
          </article>
          
          <article  className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
          <label htmlFor="Date">Enter Date</label>
          <input type="text" name="date" id="date" placeholder="Enter date" autoComplete="off" value={date} onChange={(e)=>setDate(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="Phone">Enter Phone number</label>
          <input type="number" name="phone" id="phone" placeholder="Enter phone number" autoComplete="off" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          </article>
          <article className="md:grid grid-cols-2 gap-10">
          <div className="flex flex-col">
          <label htmlFor="Mobile">Enter Mobile number</label>
          <input type="number" name="mobile" id="mobile" placeholder="Enter mobile number" autoComplete="off" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="invoiceNumber">Enter Invoice number</label>
          <input type="number" name="invoiceNumber" id="invoiceNumber" placeholder="Enter invoice number" autoComplete="off" value={invoiceNumber} onChange={(e)=>setInvoiceNumber(e.target.value)}/>
          </div>
          </article>
          <article>
            <TableForm particulars={particulars} setParticulars={setParticulars} amount={amount} setAmount={setAmount} quantity={quantity} setQuantity={setQuantity} number={number} setNumber={setNumber} price={price} setPrice={setPrice} list={list} setList={setList} assesableValue={assesableValue} setAssesableValue={setAssesableValue} vat={vat} setVat={setVat} totalValue={totalValue} setTotalValue={setTotalValue}/>
          </article>
          <button onClick={()=>setShowInvoice(true)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
          
          </div></>
          
        )}
      </main>
    </>
  );
}

export default App;
