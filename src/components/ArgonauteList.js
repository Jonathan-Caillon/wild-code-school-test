const ArgonauteList = ({ argonautes }) => (
    <>
      {argonautes && argonautes.length ? (
        <section className="member-list">
          {argonautes.map((argonaute, i) => (
            <div className="member-item" key={i}>
              {argonaute.nom}
            </div>
          ))}
        </section>
      ) : (
        <p className="empty-notice">Aucun argonautes présents</p>
      )}
    </>
);

export default ArgonauteList;
