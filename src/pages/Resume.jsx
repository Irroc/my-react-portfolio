import '../styles/Resume.css'
export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className="resumeDiv">
        <embed className='pdf' src="/src/assets/CorriNaglieResume.pdf" type="application/pdf">
        </embed>
      </div>
    </div>
  );
}
