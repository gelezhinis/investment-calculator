const UserInput = ({onHandleInvestment, investment}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={investment.initial}
            onChange={(event) => onHandleInvestment("initial", event.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={investment.annual}
            onChange={(event) => onHandleInvestment("annual", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={investment.expected}
            onChange={(event) => onHandleInvestment("expected", event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={investment.duration}
            onChange={(event) => onHandleInvestment("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
