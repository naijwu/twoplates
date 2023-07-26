'use client';

import { useState, useMemo } from 'react'
import { dateToString, parseData, parseFilteredData } from '@/utilities/helpers';
import styles from './page.module.css'
import { INPUT_EXAMPLE, parsedSchema } from '@/utilities/types';
import { DATA } from '@/utilities/data';

const Toggle = ({
  toggle,
  label,
  onClick
}: {
  toggle: any;
  label: any;
  onClick: () => void;
}) => {

  return (
    <div className={styles.toggle}>
      <div className={styles.toggleItself} onClick={onClick}>
        {toggle}
      </div>
      <div className={styles.toggleLabel}>
        {label}
      </div>
    </div>
  )
}

export default function Home() {

  const [showOnlyPR, setShowOnlyPR] = useState<boolean>(false)
  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [filters, setFilters] = useState<string[]>([])

  const exercises = Object.keys(DATA)
  const data: parsedSchema = useMemo(() => 
    (showFilters || showOnlyPR) 
      ? parseFilteredData(DATA, filters, showOnlyPR) 
      : parseData(DATA), 
    [filters, showFilters, showOnlyPR])

  function handleAddToFilter(exercise: string) {
    const updatedFilters: string[] = JSON.parse(JSON.stringify(filters));
    if(updatedFilters.includes(exercise)) {
      updatedFilters.splice(filters.indexOf(exercise), 1)
    } else {
      updatedFilters.push(exercise)
    }
    setFilters(updatedFilters)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        ●●
      </div>
      <div className={styles.options}>
        <Toggle
          toggle={showOnlyPR ? '●' : '○'}
          label={'show only PR days'}
          onClick={()=>setShowOnlyPR(!showOnlyPR)} />
        <Toggle
          toggle={'●'}
          label={!showFilters ? 'show all exercises' : (
            <div className={styles.inline}>
              show only&nbsp;{exercises?.map((exercise, index) => (
                <div key={exercise} onClick={()=>handleAddToFilter(exercise)} className={`${styles.exerciseItem} ${filters.includes(exercise) ? styles.active : ''}`}>
                  {`${exercise}${index + 1 != exercises?.length ? `,` : ''}`}&nbsp;
                </div>
              ))}
            </div>
          )}
          onClick={()=>setShowFilters(!showFilters)} />
      </div>
      <div className={styles.stats}>
        {data?.map((item, index) => (
          <>
            <div className={styles.date}>
              {dateToString(item.date)}
            </div>
            <div className={styles.exercises}>
              {item.exercises?.map((exercise) => (
                <div key={`${index}`} className={styles.exercise}>
                  <div className={styles.label}>
                    {exercise.exercise}
                  </div>
                  <div className={styles.note}>
                    {exercise.note}
                  </div>
                  {exercise.sets?.map((set, index) => (
                    <div key={index}>
                        {set[0]} x {set[1]}
                      </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}
