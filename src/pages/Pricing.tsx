// src/pages/Pricing.tsx
import React, { useState, useEffect } from "react";
import "./Pricing.css";
import { FaCreditCard, FaEnvelopeOpenText, FaShieldAlt } from "react-icons/fa";


const Pricing = () => {
  const [service, setService] = useState("compute");
  const [instances, setInstances] = useState(1);
  const [cpu, setCpu] = useState(1);
  const [ram, setRam] = useState(1);
  const [hours, setHours] = useState(24);
  const [days, setDays] = useState(7);
  const [storageSize, setStorageSize] = useState(500);
  const [backupFreq, setBackupFreq] = useState(2);
  const [dbCount, setDbCount] = useState(1);
  const [dbCpu, setDbCpu] = useState(1);
  const [dbRam, setDbRam] = useState(1);
  const [dbStorage, setDbStorage] = useState(20);
  const [price, setPrice] = useState<{ total: number; details: string[] }>({ total: 0, details: [] });

  useEffect(() => {
    let total = 0;
    const details: string[] = [];

    if (service === "compute") {
      const weeklyHours = hours * days;
      const rate = cpu * 5 + ram * 2;
      total = instances * rate * weeklyHours;
      details.push(`${instances} Instanzen · ${cpu} CPU · ${ram} GB RAM · ${hours} h/Tag · ${days} Tage/Woche`);
    }

    if (service === "storage") {
      const storageCost = storageSize * 0.02;
      const backupCosts = [2, 5, 10, 15];
      const backupCost = backupCosts[backupFreq];
      total = storageCost + backupCost;
      const labels = ["Jährlich", "Monatlich", "Wöchentlich", "Täglich"];
      details.push(`${storageSize} GB Speicher: ${storageCost.toFixed(2)} €`);
      details.push(`Backup ${labels[backupFreq]}: ${backupCost} €`);
    }

    if (service === "database") {
      total = dbCount * ((dbCpu * 4 + dbRam * 3) * 720 + dbStorage * 0.01);
      details.push(`${dbCount} Datenbanken · ${dbCpu} CPU · ${dbRam} GB RAM · ${dbStorage} GB Speicher`);
    }

    setPrice({ total, details });
  }, [service, instances, cpu, ram, hours, days, storageSize, backupFreq, dbCount, dbCpu, dbRam, dbStorage]);

  return (
    <div className="pricing-layout">
      <div className="pricing-section">
        <h1>Preiskalkulator</h1>
        <p className="calculator-info">
          Wähle einen Dienst und passe die Parameter über die Slider an. Die Preisübersicht auf der rechten Seite wird automatisch aktualisiert.
        </p>

        <div className="service-tabs">
          {["compute", "storage", "database"].map((s) => (
            <button
              key={s}
              className={`tab-button ${service === s ? "active" : ""}`}
              onClick={() => setService(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {service === "compute" && (
          <div className="slider-group">
            <label>Instanzen: {instances}</label>
            <input type="range" min={1} max={100} value={instances} onChange={(e) => setInstances(+e.target.value)} />

            <label>CPU-Kerne: {cpu}</label>
            <input type="range" min={1} max={16} value={cpu} onChange={(e) => setCpu(+e.target.value)} />

            <label>RAM (GB): {ram}</label>
            <input type="range" min={1} max={64} value={ram} onChange={(e) => setRam(+e.target.value)} />

            <label>Stunden/Tag: {hours}</label>
            <input type="range" min={1} max={24} value={hours} onChange={(e) => setHours(+e.target.value)} />

            <label>Tage/Woche: {days}</label>
            <input type="range" min={1} max={7} value={days} onChange={(e) => setDays(+e.target.value)} />
          </div>
        )}

        {service === "storage" && (
          <div className="slider-group">
            <label>Speicher (GB): {storageSize}</label>
            <input type="range" min={100} max={5000} step={100} value={storageSize} onChange={(e) => setStorageSize(+e.target.value)} />

            <label>Backup-Frequenz: {["Jährlich", "Monatlich", "Wöchentlich", "Täglich"][backupFreq]}</label>
            <input type="range" min={0} max={3} value={backupFreq} onChange={(e) => setBackupFreq(+e.target.value)} />
          </div>
        )}

        {service === "database" && (
          <div className="slider-group">
            <label>Anzahl DBs: {dbCount}</label>
            <input type="range" min={1} max={10} value={dbCount} onChange={(e) => setDbCount(+e.target.value)} />

            <label>CPU-Kerne pro DB: {dbCpu}</label>
            <input type="range" min={1} max={16} value={dbCpu} onChange={(e) => setDbCpu(+e.target.value)} />

            <label>RAM pro DB (GB): {dbRam}</label>
            <input type="range" min={1} max={64} value={dbRam} onChange={(e) => setDbRam(+e.target.value)} />

            <label>DB-Speicher (GB): {dbStorage}</label>
            <input type="range" min={10} max={1000} step={10} value={dbStorage} onChange={(e) => setDbStorage(+e.target.value)} />
          </div>
        )}
      </div>

      <div className="price-live-box">
        <h2>Live Preisübersicht</h2>
        <h3>{price.total.toFixed(2)} € / Monat</h3>
        <ul>
          {price.details.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <hr />
        <p><FaCreditCard className="icon" /> <strong>Zahlungsart:</strong> Monatlich per Kreditkarte oder Rechnung</p>
        <p><FaEnvelopeOpenText className="icon" /> <strong>Support enthalten:</strong> 24/7 E-Mail-Support</p>
        <p><FaShieldAlt className="icon" /> <strong>SLA:</strong> 99.9% Verfügbarkeit auf Compute und Datenbankdienste</p>
        <p className="disclaimer">
          * Alle Preisangaben sind unverbindlich und dienen lediglich zur Orientierung.
        </p>
      </div>
      
    </div>
  );
};

export default Pricing;
