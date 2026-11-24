import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Check, Clock3,
  MapPin, Phone, Instagram, Dumbbell, Shield, Trophy, Users, Star,
  ChevronDown, MessageCircle, CalendarDays, Zap, Heart, Award
} from "lucide-react";
import "./styles.css";

const WHATSAPP = "919970297708";
const INSTAGRAM = "https://www.instagram.com/trikaaya.fit?dmpr=MWZxZ3hnZmx1eW1wZQ==";
const MAPS = "https://maps.app.goo.gl/aic27btZPx4BJA429";

const programs = [
  { n:"01", name:"Karate", age:"Ages 5+", sessions:"4 sessions / week", desc:"Traditional striking, kata and self-defence. Build iron discipline and precision.", tags:["Kihon","Kata","Kumite"], tone:"orange" },
  { n:"02", name:"Taekwondo", age:"Ages 4+", sessions:"5 sessions / week", desc:"Olympic-style kicking art. Speed, agility and explosive power in every technique.", tags:["Kyorugi","Poomsae","Footwork"], tone:"blue" },
  { n:"03", name:"MMA & Boxing", age:"Ages 14+", sessions:"5 sessions / week", desc:"Mixed martial arts combining striking and grappling for complete fighters.", tags:["Striking","Wrestling","Grappling"], tone:"dark" },
  { n:"04", name:"Judo & Grappling", age:"Ages 6+", sessions:"4 sessions / week", desc:"Throws, pins and ground control. Use leverage, balance and technique.", tags:["Throws","Pins","Ground work"], tone:"yellow" },
  { n:"05", name:"Fitness & Conditioning", age:"All ages", sessions:"6 sessions / week", desc:"Martial arts-based conditioning for strength, endurance and lasting fitness.", tags:["HIIT","Strength","Mobility"], tone:"green" },
  { n:"06", name:"Kids Warriors", age:"Ages 4–12", sessions:"3 sessions / week", desc:"Fun, structured classes that build focus, confidence, coordination and respect.", tags:["Confidence","Focus","Movement"], tone:"pink" }
];

const schedule = [
  ["Monday","6–7 AM","Karate · All levels","4:30–5:30 PM","Kids Warriors","7–8:30 PM","MMA · Advanced","8:30–9:30 PM","Fitness"],
  ["Tuesday","6–7 AM","Taekwondo · Adults","4:30–5:30 PM","Kids Warriors","6:30–7:30 PM","Fitness","8–9 PM","Taekwondo"],
  ["Wednesday","6–7 AM","Judo & Grappling","4:30–5:30 PM","Kids Warriors","7–8:30 PM","Judo · All levels","8:30–9:30 PM","MMA · Beginners"],
  ["Thursday","6–7:30 AM","Karate · Advanced","4:30–5:30 PM","Taekwondo Juniors","7–8 PM","Boxing · Beginners","8–9 PM","Karate · Kata"],
  ["Friday","6–7 AM","Fitness & Conditioning","4:30–5:30 PM","Kids Warriors","7–8:30 PM","MMA · Intermediate","8:30–9:30 PM","Fitness · Advanced"],
  ["Saturday","8–10 AM","Open Mat","10–11 AM","Karate Juniors","5–7 PM","Competition Prep","—","—"]
];

const coaches = [
  {name:"Sensei Rajesh Nair",role:"Head Coach · Karate",credential:"8th Dan Black Belt",bio:"20+ years of competitive Karate and coaching. Former Maharashtra state champion; has trained over 300 black belts.",stat:"300+ black belts"},
  {name:"Master Priya Deshmukh",role:"Senior Coach · Taekwondo",credential:"6th Dan · WT Certified",bio:"National-level Taekwondo athlete and Olympic pathway coach, specialising in high-performance kyorugi and kids' development.",stat:"28 medals"},
  {name:"Coach Vikram Joshi",role:"MMA & Boxing Coach",credential:"12 years pro career",bio:"Former professional MMA fighter with a 12-year competitive career. Now develops the next generation of fighters in Pune.",stat:"18 pro wins"},
  {name:"Sensei Amita Kulkarni",role:"Judo Coach",credential:"5th Dan · IJF Level 2",bio:"National Judo championship representative, combining rigorous technical expertise with a nurturing approach.",stat:"22 medals"},
  {name:"Coach Siddharth Pawar",role:"Fitness Coach · S&C",credential:"NSCA-CSCS Certified",bio:"Strength and conditioning specialist bridging fitness science with martial arts performance and injury prevention.",stat:"8+ years"}
];

const reasons = [
  ["01","Expert certified coaches","Every coach brings recognised training and experience. Your progress depends on the quality of guidance."],
  ["02","All ages, all levels","From young beginners to competitive adult athletes, training grows with you wherever you start."],
  ["03","Competition-ready training","Structured preparation for students who want to compete, with strong fundamentals for everyone."],
  ["04","A space built for training","A focused training environment with a fully matted area, equipment and a supportive community."]
];

function App(){
  const [menuOpen,setMenuOpen] = useState(false);
  const [activeDay,setActiveDay] = useState("Monday");
  const [modal,setModal] = useState(false);
  const [form,setForm] = useState({name:"",phone:"",age:"",program:"",day:"",slot:"",note:""});
  const [faqOpen,setFaqOpen] = useState(0);
  const [sent,setSent] = useState(false);

  const openForm = (program="") => { setForm(f=>({...f,program})); setSent(false); setModal(true); };
  const update = e => setForm({...form,[e.target.name]:e.target.value});
  const submit = e => {
    e.preventDefault();
    const message = `Hello Trikaaya! I would like to register / enquire about a class.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AAge: ${encodeURIComponent(form.age)}%0AProgram: ${encodeURIComponent(form.program)}%0APreferred day: ${encodeURIComponent(form.day)}%0APreferred time: ${encodeURIComponent(form.slot)}%0ANote: ${encodeURIComponent(form.note || "—")}%0AMonthly fee understood: ₹1,500`;
    setSent(true);
    window.open(`https://wa.me/${WHATSAPP}?text=${message}`,"_blank","noopener,noreferrer");
  };
  const nav = [["Programs","#programs"],["Why Trikaaya","#why"],["Schedule","#schedule"],["Coaches","#coaches"],["About","#about"],["Contact","#contact"]];

  return <>
    <header className="header">
      <a className="brand" href="#home"><span className="brand-mark">T<span>.</span></span><span><b>TRIKAAYA</b><small>MARTIAL ARTS & FITNESS</small></span></a>
      <nav className={menuOpen?"nav open":"nav"}>{nav.map(([n,h])=><a key={n} href={h} onClick={()=>setMenuOpen(false)}>{n}</a>)}</nav>
      <button className="header-cta" onClick={()=>openForm()}>Join the academy <ArrowUpRight size={16}/></button>
      <button className="menu-btn" aria-label="Toggle navigation" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grain"></div><div className="hero-topline"><span>PUNE'S PREMIER MARTIAL ARTS ACADEMY</span><span>EST. 2014 · PUNE, INDIA</span></div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot"></span> DISCIPLINE · STRENGTH · COMMUNITY</p>
          <h1>TRAIN HARD.<br/><em>LIVE STRONG.</em></h1>
          <p className="hero-desc">From first moves to championship moments, train with coaches who help you build strength, confidence and character.</p>
          <div className="hero-actions"><button className="btn btn-dark" onClick={()=>openForm()}>Explore registration <ArrowUpRight size={17}/></button><a className="text-link" href="#programs">Explore programs <ArrowDownRight size={17}/></a></div>
          <div className="hero-foot"><span>01 / FIND YOUR DISCIPLINE</span><span>EVERY MOVE COUNTS.</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract athletic graphic">
          <div className="art-circle"></div><div className="art-ring"></div><div className="art-number">TK</div>
          <div className="art-label">BUILT THROUGH<br/>DISCIPLINE</div><div className="art-cross">✳</div>
        </div>
        <div className="hero-bottom"><span>MOVE WITH PURPOSE</span><span>SCROLL TO DISCOVER <ArrowDownRight size={14}/></span></div>
      </section>

      <section className="stats">
        {[["500+","ACTIVE STUDENTS"],["12+","EXPERT COACHES"],["200+","CHAMPIONSHIPS"],["10 YRS","OF EXCELLENCE"]].map(([v,l])=><div className="stat" key={l}><strong>{v}</strong><span>{l}</span></div>)}
      </section>

      <section className="section programs-section" id="programs">
        <div className="section-head"><div><p className="kicker">01 — FIND YOUR DISCIPLINE</p><h2>YOUR GAME.<br/><span>YOUR GROWTH.</span></h2></div><p className="section-intro">Different disciplines. One shared mindset. Find the training that moves you forward.</p></div>
        <div className="program-grid">{programs.map(p=><article className={`program-card ${p.tone}`} key={p.name}>
          <div className="program-card-top"><span>{p.n} / PROGRAM</span><span className="program-symbol">{p.n==="01"?"拳":p.n==="02"?"蹴":p.n==="03"?"MMA":p.n==="04"?"柔":p.n==="05"?"FIT":"KID"}</span></div>
          <div className="program-card-body"><p className="program-age">{p.age} <i/> {p.sessions}</p><h3>{p.name}</h3><p className="program-desc">{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><button className="card-link" onClick={()=>openForm(p.name)}>Enquire about program <ArrowUpRight size={16}/></button></div>
        </article>)}</div>
      </section>

      <section className="why-section" id="why"><div className="why-intro"><p className="kicker">02 — THE TRIKAAYA APPROACH</p><h2>MORE THAN<br/><span>TRAINING.</span></h2><p>We believe martial arts is not just about what you learn to do. It's about who you become along the way.</p><a href="#about" className="text-link">Our story <ArrowUpRight size={16}/></a></div><div className="reason-list">{reasons.map(([n,t,d])=><div className="reason" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight size={19}/></div>)}</div></section>

      <section className="price-band"><div><p className="kicker">STRAIGHTFORWARD MEMBERSHIP</p><h2>ONE FEE.<br/><span>ALL DRIVE.</span></h2><p>Choose the discipline that inspires you. The monthly fee stays the same.</p></div><div className="price-card"><span>MONTHLY MEMBERSHIP</span><strong>₹1,500<small>/ month</small></strong><div className="price-line"></div><p><Check size={15}/> Same monthly fee across all programs</p><p><Check size={15}/> Choose your preferred discipline</p><button className="btn btn-dark" onClick={()=>openForm()}>Get started <ArrowUpRight size={16}/></button></div></section>

      <section className="section schedule-section" id="schedule"><div className="section-head"><div><p className="kicker">03 — PLAN YOUR TRAINING</p><h2>MAKE TIME<br/><span>TO MOVE.</span></h2></div><p className="section-intro">A weekly snapshot of training at Trikaaya. Choose a day to see the sessions.</p></div>
        <div className="day-tabs">{schedule.map(s=><button className={activeDay===s[0]?"active":""} onClick={()=>setActiveDay(s[0])} key={s[0]}>{s[0].slice(0,3)}</button>)}</div>
        {schedule.filter(s=>s[0]===activeDay).map(s=><div className="day-panel" key={s[0]}><div className="day-title"><span>{s[0]}</span><small>WEEKLY TIMETABLE · IST</small></div><div className="class-list">{[1,3,5,7].map(i=><div className="class-row" key={i}><span className="class-time"><Clock3 size={15}/>{s[i]}</span><strong>{s[i+1]}</strong><button onClick={()=>openForm(s[i+1].split(" · ")[0])}>Enquire <ArrowUpRight size={14}/></button></div>)}</div></div>)}
        <p className="schedule-note">Schedule shown as provided in the website brief. Please confirm current batch availability with the academy.</p>
      </section>

      <section className="coaches-section" id="coaches"><div className="section-head"><div><p className="kicker">04 — GUIDED BY EXPERIENCE</p><h2>MEET YOUR<br/><span>MENTORS.</span></h2></div><p className="section-intro">Great coaching builds more than technique. It builds belief, discipline and the confidence to keep going.</p></div><div className="coach-grid">{coaches.map((c,i)=><article className="coach-card" key={c.name}><div className={`coach-visual cv-${i+1}`}><span>TRIKAAYA / COACH</span><strong>0{i+1}</strong><div className="coach-monogram">{c.name.split(" ").slice(-1)[0].slice(0,1)}</div></div><div className="coach-info"><p>{c.role}</p><h3>{c.name}</h3><span className="credential">{c.credential}</span><p className="coach-bio">{c.bio}</p><div className="coach-stat"><Award size={15}/>{c.stat}</div></div></article>)}</div></section>

      <section className="about-section" id="about"><div className="about-stamp">MIND<br/>BODY<br/>SPIRIT</div><div className="about-copy"><p className="kicker">05 — OUR STORY · EST. 2014</p><h2>FORGING WARRIORS.<br/><span>BUILDING CHARACTER.</span></h2><p>Trikaaya was born from a belief that martial arts is not just about fighting — it's about becoming the best version of yourself. The name “Trikaaya” means three bodies in Sanskrit: mind, body and spirit.</p><p>From a small Karate class in Pune to a growing academy, our commitment remains the same: your growth is our mission.</p><div className="timeline"><div><b>2014</b><span>The beginning — first studio in Kothrud</span></div><div><b>2017</b><span>Expanded to Taekwondo & Judo</span></div><div><b>2021</b><span>MMA program launched</span></div><div><b>2024</b><span>10 years of training and community</span></div></div></div></section>

      <section className="faq-section"><div><p className="kicker">06 — GOOD TO KNOW</p><h2>QUESTIONS?<br/><span>WE'RE HERE.</span></h2></div><div className="faq-list">{[
        ["Which program should a beginner choose?","Choose the discipline that interests you. Send us an enquiry and the team can help guide you to a suitable batch."],
        ["Are there programs for children?","Yes. Kids Warriors is designed for ages 4–12, and Karate and Taekwondo also have junior pathways."],
        ["What is the monthly fee?","The current website registration fee is shown as one simple price: ₹1,500 per month across all listed programs."],
        ["How do I confirm timings and availability?","Use the WhatsApp button to contact the academy and confirm the latest batch schedule before visiting."]
      ].map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setFaqOpen(faqOpen===i?-1:i)}><span>{q}</span><ChevronDown className={faqOpen===i?"rotated":""}/></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div></section>

      <section className="final-cta"><div className="cta-scribble">LET'S<br/>GO!</div><p className="kicker">YOUR NEXT CHAPTER STARTS HERE</p><h2>READY TO<br/><span>JOIN THE GAME?</span></h2><p>Take the first step. Tell us what you'd like to train in and we'll help you get started.</p><button className="btn btn-cream" onClick={()=>openForm()}>Start registration <ArrowUpRight size={17}/></button></section>
    </main>

    <footer id="contact"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#home"><span className="brand-mark">T<span>.</span></span><span><b>TRIKAAYA</b><small>MARTIAL ARTS & FITNESS</small></span></a><p>Train hard. Live strong. Building strength, confidence and character through martial arts and fitness.</p><a className="insta-link" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={17}/> @trikaaya.fit <ArrowUpRight size={14}/></a></div><div className="footer-col"><b>EXPLORE</b><a href="#programs">Programs</a><a href="#schedule">Schedule</a><a href="#coaches">Coaches</a><a href="#about">Our story</a></div><div className="footer-col"><b>GET IN TOUCH</b><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"><Phone size={15}/> +91 99702 97708</a><a href={MAPS} target="_blank" rel="noreferrer"><MapPin size={15}/> Kothrud, Pune</a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={15}/> Instagram</a></div><div className="footer-map"><span>FIND YOUR WAY</span><div className="map-art"><MapPin size={27}/><b>PUNE</b><small>KOTHRUD</small></div><a href={MAPS} target="_blank" rel="noreferrer">Open directions <ArrowUpRight size={14}/></a></div></div><div className="footer-bottom"><span>© 2026 TRIKAAYA MARTIAL ARTS & FITNESS</span><span>MADE FOR MOVEMENT.</span><a href="#home">BACK TO TOP ↑</a></div></footer>

    <a className="whatsapp-float" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hello Trikaaya! I would like to know more about registration.")}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22}/></a>
    <div className="mobile-join"><span>₹1,500 <small>/ month</small></span><button onClick={()=>openForm()}>Join now <ArrowUpRight size={16}/></button></div>

    {modal&&<div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setModal(false)}}><div className="modal"><button className="modal-close" onClick={()=>setModal(false)} aria-label="Close"><X/></button><p className="kicker">LET'S GET YOU STARTED</p><h2>START YOUR<br/><span>JOURNEY.</span></h2><p className="modal-sub">Share a few details. We'll connect with you on WhatsApp.</p><form onSubmit={submit}><label>Full name<input name="name" value={form.name} onChange={update} placeholder="Your name" required/></label><div className="form-two"><label>Phone number<input name="phone" type="tel" pattern="[0-9+() -]{8,16}" value={form.phone} onChange={update} placeholder="Your mobile number" required/></label><label>Age<input name="age" type="number" min="3" max="99" value={form.age} onChange={update} placeholder="Age" required/></label></div><label>Choose a program<select name="program" value={form.program} onChange={update} required><option value="">Select program</option>{programs.map(p=><option key={p.name}>{p.name}</option>)}</select></label><div className="form-two"><label>Preferred day<select name="day" value={form.day} onChange={update} required><option value="">Choose day</option>{schedule.map(s=><option key={s[0]}>{s[0]}</option>)}</select></label><label>Preferred time<input name="slot" value={form.slot} onChange={update} placeholder="e.g. 6 PM" required/></label></div><label>Anything else? <textarea name="note" value={form.note} onChange={update} placeholder="Optional message" rows="2"/></label><div className="form-price"><span>Monthly fee</span><strong>₹1,500 / month</strong></div><button className="btn btn-dark submit-btn" type="submit">Continue on WhatsApp <ArrowUpRight size={17}/></button>{sent&&<p className="sent-note">Your WhatsApp message is ready. If it didn't open, use the WhatsApp contact button.</p>}<small className="privacy-note">Frontend demo only. Your details are not stored on a server.</small></form></div></div>}
  </>;
}

createRoot(document.getElementById("root")).render(<App/>);
