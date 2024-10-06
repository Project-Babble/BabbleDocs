// src/components/ResistorCalculator.jsx

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styles from './ResistorCalculator.module.css';

// E24 series values
const E24 = [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1];

function generateFullE24Series() {
    let fullSeries = [];
    for (let i = 0; i <= 6; i++) {
        fullSeries = fullSeries.concat(E24.map(value => value * Math.pow(10, i)));
    }
    return fullSeries;
}

const fullE24 = generateFullE24Series();

export default function ResistorCalculator() {
    const [inputs, setInputs] = useState({ vs: '', vf: '', if: '', vsUnit: 'V', vfUnit: 'V', ifUnit: 'mA' });
    const [results, setResults] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        const sanitizedValue = name.endsWith('Unit') ? value : value.replace(/[^0-9.]/g, '');
        setInputs(prev => ({ ...prev, [name]: sanitizedValue }));
    }, []);

    const resetCalculator = useCallback(() => {
        setInputs({ vs: '5', vf: '', if: '', vsUnit: 'V', vfUnit: 'V', ifUnit: 'mA' });
        setResults(null);
        setError('');
    }, []);

    const calculateResistor = useCallback(() => {
        console.log('Calculating resistor with inputs:', inputs);
        const vs = parseFloat(inputs.vs) * (inputs.vsUnit === 'mV' ? 0.001 : 1);
        const vf = parseFloat(inputs.vf) * (inputs.vfUnit === 'mV' ? 0.001 : 1);
        const current = parseFloat(inputs.if) * (inputs.ifUnit === 'mA' ? 0.001 : 0.000001);

        if (isNaN(vs) || isNaN(vf) || isNaN(current) || current === 0) {
            setError('Please enter valid numbers for all fields.');
            setResults(null);
            return;
        }

        if (vs <= 0 || vs > 1000 || vf <= 0 || vf > 1000 || current <= 0 || current > 1) {
            setError('Input values are out of reasonable range.');
            setResults(null);
            return;
        }

        if (vf >= vs) {
            setError('Forward voltage must be less than supply voltage.');
            setResults(null);
            return;
        }

        const exactR = (vs - vf) / current;
        const standardR = fullE24.find(value => value >= exactR);
        const power = (vs - vf) * current;

        console.log('Calculation results:', { exactR, standardR, power });

        setError('');
        setResults({
            exact: exactR.toFixed(2),
            standard: standardR,
            power: power.toFixed(4)
        });
    }, [inputs]);

    useEffect(() => {
        if (inputs.vs && inputs.vf && inputs.if) {
            calculateResistor();
        }
    }, [inputs, calculateResistor]);

    const unitOptions = useMemo(() => ({
        voltage: ['V', 'mV'],
        current: ['mA', 'µA']
    }), []);

    return (
        <div className={styles.calculator}>
            <h3 className={styles.title}>LED Resistor Calculator</h3>
            <div className={styles.inputContainer}>
                {['vs', 'vf', 'if'].map(field => (
                    <div key={field} className={styles.inputGroup}>
                        <label htmlFor={field}>
                            {field === 'vs' ? 'Supply Voltage' : field === 'vf' ? 'LED Forward Voltage' : 'LED Current'}
                        </label>
                        <div className={styles.inputWithUnit}>
                            <input
                                id={field}
                                name={field}
                                type="text"
                                value={inputs[field]}
                                onChange={handleInputChange}
                                placeholder={`e.g, ${field === 'if' ? '20' : field === 'vf' ? '2.2' : '5'}`}
                            />
                            <select
                                name={`${field}Unit`}
                                value={inputs[`${field}Unit`]}
                                onChange={handleInputChange}
                            >
                                {unitOptions[field === 'if' ? 'current' : 'voltage'].map(unit => (
                                    <option key={unit} value={unit}>{unit}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={resetCalculator} className={styles.resetButton}>
                Reset
            </button>
            {error && <div className={styles.error}>{error}</div>}
            {results && (
                <div className={styles.result}>
                    <div className={styles.resultItem}>
                        <span>Exact Resistance:</span>
                        <strong>{results.exact} Ω</strong>
                    </div>
                    <div className={styles.resultItem}>
                        <span>E24 Resistor:</span>
                        <strong>{results.standard} Ω</strong>
                    </div>
                    <div className={styles.resultItem}>
                        <span>Power Dissipation:</span>
                        <strong>{results.power} W</strong>
                    </div>
                </div>
            )}
        </div>
    );
}