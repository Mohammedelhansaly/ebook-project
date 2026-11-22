import React from 'react'
import {Card, CardTitle} from '../../components/ui/card'

const CategorieSection = () => {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-black text-center'>Book Categories</h1>
      <div className="categorie_cards mt-10 flex items-center justify-center gap-6">
        <Card>
          <CardTitle >Card Title</CardTitle>
        </Card>
      </div>
    </div>
  )
}

export default CategorieSection
