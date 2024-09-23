import { useState } from "react";

function TipCalculator() {
  //bill use state
  //percentage of the tip usestate
  // amount of people thats paying usestate

  //check if input is valid
  // if yes -> do the calc ( bill * percentage / people ==> result )
  // if no, says go fuck urself as a warning

  const [billTotal, setBillTotal] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [result, setResult] = useState(null);

  const [total, setTotal] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    //   CALCULATIONS HERE:
    const parsedBill = parseFloat(billTotal);

    const parsedTip = parseFloat(tip);
    console.log(parsedTip);
    const parsedPeople = parseFloat(people);

    //if (billTotal !== '' && tip !== '' && people !== '')
    if (!isNaN(billTotal) && !isNaN(tip) && !isNaN(people)) {
      const TipPerPerson = (billTotal * tip) / (100 * people);
      setResult(TipPerPerson.toFixed(2));

      const BillWithTip = parsedBill / parsedPeople + TipPerPerson;
      setTotal(BillWithTip.toFixed(2));
    }
  };

  return (
    <>
      <form className="flex flex-col gap-3 w-fit border border-slate-800 rounded-md p-7">
        <h1 className="text-4xl mb-5 mx-auto">Tip Calculator</h1>
        <div>
          <label htmlFor="billTotal">Bill Total:</label>
          <input
            className="border border-slate-800 rounded-sm ms-3 px-1"
            type="number"
            id="billTotal"
            value={billTotal}
            onChange={(e) => {
              setBillTotal(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="tip">Tip percentage:</label>
          <input
            className="border border-slate-800 rounded-sm ms-3 px-1"
            type="number"
            id="tip"
            value={tip}
            onChange={(e) => {
              setTip(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="persons">People:</label>
          <input
            className="border border-slate-800 rounded-sm ms-3 px-1"
            type="number"
            id="people"
            value={people}
            onChange={(e) => {
              setPeople(e.target.value);
            }}
          />
        </div>
        <div className="flex mt-5">
          <button
            className="my-auto border border-slate-800 w-fit px-3 py-1 rounded-md"
            type="button"
            onClick={handleSubmit}
          >
            Calculate
          </button>
          {result && total && (
            <div className="ms-10 items-center">
              <p>Tip per person: ${result}</p>
              Total per person: ${total}{" "}
            </div>
          )}
        </div>
      </form>
    </>
  );
}

export default TipCalculator;
