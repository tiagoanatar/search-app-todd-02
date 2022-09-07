import { Table } from 'react-bootstrap'
import { PartItem } from './PartItem'

export const PartsTable = ({ parts, setParts, data, search, pages })=> {

  return (
    <>
      <Table striped bordered hover style={{tableLayout: 'fixed'}} responsive>
        <thead className="hide-mobile">
          <tr>
            <th width='25%'><small>Manufacturer</small></th>
            <th width='30%'><small>Model Number</small></th>
            <th width='25%'><small>Avg. Repair Price</small></th>
            <th width='20%'><small>Select</small></th>
          </tr>
        </thead>
        <tbody>

          {/* search filter result */}
          {data.length > 0 && search !== undefined ? data.filter((item, index) => {
            if (item['Model #']
                  ?.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '')
                  .toLowerCase()
                  .includes(search.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '').trim().split(' ').join('').toLowerCase()) 
                  || item['Manufacturer']
                  ?.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '')
                  .toLowerCase()
                  .includes(search.replace(/[&\\#,+()$~%.'":*?<>{}]/g, '').trim().split(' ').join('').toLowerCase())
                ) 
                  {
                return true
              } else {
                return false
              }
            }).slice(0,50).map((item, index) => <PartItem key={index} item={item} parts={parts} setParts={setParts} />)
          : null}

          {data.length > 0 && search === undefined ? data.slice(pages.prev,pages.next).map((item, index) => <PartItem key={item["Catalog or Item Number"]} item={item} parts={parts} setParts={setParts} />) : null}

        </tbody>
      </Table>
      </>
      );
    }