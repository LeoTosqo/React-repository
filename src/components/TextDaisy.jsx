import React from 'react'

const TextDaisy = () => {


  return (
    <div>
      <div>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
        <div>
          <div className="drawer ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn btn-primary drawer-button"
              >
                Open drawer
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
                  Most played songs this week
                </li>

                <li className="list-row">
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                    />
                  </div>
                  <div>
                    <div>Dio Lupa</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Remaining Reason
                    </div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    "Remaining Reason" became an instant hit, praised for its
                    haunting sound and emotional depth. A viral performance
                    brought it widespread recognition, making it one of Dio
                    Lupa’s most iconic tracks.
                  </p>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 3L20 12 6 21 6 3z"></path>
                      </g>
                    </svg>
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>

                <li className="list-row">
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                    />
                  </div>
                  <div>
                    <div>Ellie Beilish</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Bears of a fever
                    </div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    "Bears of a Fever" captivated audiences with its intense
                    energy and mysterious lyrics. Its popularity skyrocketed
                    after fans shared it widely online, earning Ellie critical
                    acclaim.
                  </p>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 3L20 12 6 21 6 3z"></path>
                      </g>
                    </svg>
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>

                <li className="list-row">
                  <div>
                    <img
                      className="size-10 rounded-box"
                      src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                    />
                  </div>
                  <div>
                    <div>Sabrino Gardener</div>
                    <div className="text-xs uppercase font-semibold opacity-60">
                      Cappuccino
                    </div>
                  </div>
                  <p className="list-col-wrap text-xs">
                    "Cappuccino" quickly gained attention for its smooth melody
                    and relatable themes. The song’s success propelled Sabrino
                    into the spotlight, solidifying their status as a rising
                    star.
                  </p>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M6 3L20 12 6 21 6 3z"></path>
                      </g>
                    </svg>
                  </button>
                  <button className="btn btn-square btn-ghost">
                    <svg
                      className="size-[1.2em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </g>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextDaisy