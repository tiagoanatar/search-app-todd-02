import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

export const PartItem = ({ item, parts, setParts }) => {

  // selected state
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if (parts.includes(`${item['Model #']} (${item['Manufacturer']})`) === true){
      setSelected(true)
    } else {
      setSelected(false)
    }
  },[parts])

  return (
    <>
    <style type="text/css">
      {`
      .btn-wolter1 {
        background-color: #000;
        color: white;
      }
      .btn-wolter1:hover {
        background-color: #666;
        color: white;
      }
      .btn-wolter2 {
        background-color: #666;
        color: white;
      }
      .btn-wolter2:hover {
        background-color: #999;
        color: white;
      }
      `}
    </style>
    <tr>
      <td>{item['Manufacturer']}</td>
      <td>{item['Model #']}</td>
      <td>{item['Repair Price']}</td>
      <td>
        { selected 
        ? (<Button 
          variant="wolter2"
          onClick={() => {
            const removedItem = parts.filter((subItem) => `${item['Model #']} (${item['Manufacturer']})` !== subItem)
            setParts(removedItem)
            setSelected(!selected)
          }
          }>
          Remove Part
        </Button>) 
        : (<Button 
          variant="wolter1" 
          onClick={() => {
            setParts([...parts, `${item['Model #']} (${item['Manufacturer']})`])
            setSelected(!selected)
          }
        }>
          Select Part
        </Button>)}
      </td>
    </tr>
    </>
  )
}