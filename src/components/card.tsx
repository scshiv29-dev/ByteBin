export default function Card({ data}: { data: any }) {
    return (
      <div className={`card w-64 x-5 shadow-xl ${data.visibility === 'PUBLIC' ? 'bg-cyan-200' : 'bg-lime-400'}`}>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.content}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Share</button>
          </div>
        </div>
      </div>
    );
  }
  