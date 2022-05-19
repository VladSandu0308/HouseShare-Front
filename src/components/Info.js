import React from 'react';
const Info = () => {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingOne">
          <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none;"
            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
            aria-controls="collapseOne">
            Facebook group 
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <strong>Link: https://www.facebook.com/groups/2445149202283866</strong> 
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingTwo">
          <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none;" 
            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
            aria-controls="collapseTwo">
            Vlad Gheorghe platform for managing help
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <strong>Link: https://vladgheorghe.ro/inscriere-voluntari-uniti-pentru-ucraina/?fbclid=IwAR3B9ijNLACE-56Gxl4PYM2v6r9wmjPvRLMGRk-dpJ3pxxlbQd6fNWq5II4</strong> 
          </div>
        </div>
      </div>
      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingThree">
          <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none;"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
            aria-controls="collapseThree">
            European platform for war help
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <strong>Link: https://warhelp.eu/</strong> 
          </div>
        </div>
      </div>

      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingFour">
          <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none;"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
            aria-controls="collapseFour">
            Romanian platform for war help
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <strong>Link: https://dopomoha.ro/ro</strong> 
          </div>
        </div>
      </div>

      <div class="accordion-item bg-white border border-gray-200">
        <h2 class="accordion-header mb-0" id="headingFive">
          <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none;"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
            aria-controls="collapseFive">
            9 Ways to Cope with War Anxiety
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
          data-bs-parent="#accordionExample">
          <div class="accordion-body py-4 px-5">
            <strong>Link: https://www.talkspace.com/blog/resources-war-anxiety/</strong> 
          </div>
        </div>
      </div>


    </div>
  )
}

export default Info