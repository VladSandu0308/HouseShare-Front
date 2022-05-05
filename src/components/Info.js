import React from 'react';
const Info = () => {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingOne">
          <button class="accordionElement" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
            aria-controls="collapseOne">
            5 biggest recreation centers in Southern Europe
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <strong>Link:</strong> 
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingTwo">
          <button class="accordionElement" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
            aria-controls="collapseTwo">
            Help for those in need
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <strong>Link:</strong> 
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingThree">
          <button class="accordionElement" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
            aria-controls="collapseThree">
            Do you need warm clothes?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <strong>Link:</strong> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info