
const Breadcrumb = ({
}: {
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
  
            <div className="flex w-full items-center px-4 md:w-auto">

              <div className="mb-8 flex max-w-[570px] items-center md:mb-0 lg:mb-12">
              </div>
            </div>
            <div className="flex w-full items-center px-4 md:w-auto">
            
              <div className="flex items-center px-4 md:w-auto">
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
          
                     </svg>
          </span>
          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="628"
              height="258"
              viewBox="0 0 628 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
        
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
