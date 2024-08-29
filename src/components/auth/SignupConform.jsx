const SignupConform = () => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Enter the code from your Phone!</h2>
          <p>Let us know that this email address belongs to you. Enter the code from the email sent to gmaa@gmail.com.</p>
          <input type="text0" className="myInput w-28 py-6" placeholder="V-code" />
          <div className="card-actions justify-end">
            <button className=" btn-primary px-4">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignupConform;
