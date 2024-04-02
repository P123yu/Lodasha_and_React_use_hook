import { useList } from "react-use";
const Practice = () => {
  const [list, { set, push, filter, clear, reset }] = useList([1, 2, 3, 4, 5]);
  return (
    <div>
      <button onClick={() => set([1, 2, 3])}>Set to [1, 2, 3]</button>
      <button onClick={() => push(Date.now())}>Push timestamp</button>
      <button onClick={() => filter((item) => item % 2 === 0)}>
        Filter even values
      </button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
      <pre>{JSON.stringify(list, null, 2)}</pre>
    </div>
  );
};

export default Practice;

function calling after some specific time

import React, { useCallback } from "react";
import { useTimeoutFn } from "react-use";

const Practice = () => {
  const fn = useCallback(() => {
    console.log("Function called");
  }, []);

  const [] = useTimeoutFn(fn, 5000);

  return (
    <div>
      <div>Function will be called in 5 seconds</div>
    </div>
  );
};

export default Practice;

-----------------------------------------------------------------------------------

 returns a function that forces component to re-render when called.

import { useUpdate } from "react-use";

const Practice = () => {
  const update = useUpdate();
  console.log("mounted");
  return (
    <>
      <button onClick={update}>Update</button>
    </>
  );
};
export default Practice;

or

import { useUpdate } from "react-use";

const Practice = () => {
  const update = useUpdate();
  console.log("mounted");

  function handleClick() {
    update();
  }
  return (
    <>
      <button onClick={handleClick}>click</button>
    </>
  );
};
export default Practice;

//useTimeout
Re-renders the component after a specified number of milliseconds.
Provides handles to cancel and/or reset the timeout.

import React, { useState } from "react";
import { usePrevious } from "react-use";

const Practice = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </p>
  );
};

export default Practice;

 -----------------------------------------------------------------------------------------------------

similarly like useState()

import React from "react";
import { useGetSet } from "react-use";

const Practice = () => {
  const [get, set] = useGetSet("");
  const onClick = () => {
    set("hello");
  };
  return (
    <>
      {get()}
      <button onClick={onClick}>click</button>
    </>
  );
};

export default Practice;

---------------------------------------------------------------------------------------------------
uses useGetSet to increment a number after 1 second on each click.

 If you would do this example in a naive way using regular useState hook, the counter would not increment correctly if you click fast multiple times.

import { useGetSet } from "react-use";

const Practice = () => {
  const [get, set] = useGetSet(0);
  const onClick = () => {
    setTimeout(() => {
      set(get() + 1);
    }, 1_000);
  };

  return <button onClick={onClick}>Clicked: {get()}</button>;
};

export default Practice;

or

import React from "react";

const Practice = () => {
  const [cnt, set] = useState(0);
  const onClick = () => {
    setTimeout(() => {
      set(cnt + 1);
    }, 1000);
  };

  return <button onClick={onClick}>Clicked: {cnt}</button>;
};

export default Practice;

-----------------------------------------------------------------------------------------------------

1. useToggle

import { useToggle } from "react-use";

const Practice = () => {
  const [on, toggle] = useToggle(true);
  return (
    <div>
      <div>{on ? "ON" : "OFF"}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default Practice;

-----------------------------------------------------------------------------------------------------

2. useBeforeUnload hook () (shows browser alert when user try to reload or close the page)

import { useBeforeUnload } from "react-use";

const Practice = () => {
  const [c, setC] = useState(0);
  useBeforeUnload(c);
  return (
    <div>
      <button onClick={() => setC((c) => c + 1)}>Save</button>
    </div>
  );
};

export default Practice;

--------------------------------------------------------------------------------------------------

3. useMount hook () (shows console log when component is mounted)

import { useEffect } from "react";
import { useMount } from "react-use";

const Practice = () => {
  useMount(() => console.log("hello"));
  useEffect(() => console.log("mount"), []);
  return <></>;
};
export default Practice;

---------------------------------------------------------------------------------------------------

4. useUnmount hook () (shows console log when component is unmounted)

import { useUnmount } from "react-use";

const Practice = () => {
  useUnmount(() => console.log("hello"));
  useEffect(() => console.log("mount"), []);
  return <></>;
};
export default Practice;

----------------------------------------------------------------------------------------------------

5. useLogger hook () (shows console log for each render of component) it trace component mount , unmount , update and render

import { useLogger } from "react-use";

const Practice = (props) => {
  const [c, setC] = useState(0);
  useLogger("Demo", props);
  return (
    <>
      {c}
      <button onClick={() => setC(c + 1)}>click</button>
    </>
  );
};
export default Practice;

-----------------------------------------------------------------------------------------------------

6. useEffectOnce hook () (only trigger once on mount)

import React from "react";
import { useEffectOnce } from "react-use";

const Practice = () => {
  useEffectOnce(() => {
    console.log("Running effect once on mount");
  });
};

export default Practice;

-----------------------------------------------------------------------------------------------------
7. useUpdateEffect hook ()

useUpdateEffect () will only trigger when the deps array changes

import React from "react";
import { useUpdateEffect } from "react-use";

const Practice = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  useUpdateEffect(() => {
    console.log("number");
  }, [number]);

  useUpdateEffect(() => {
    console.log("count");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click count</button>
      <button onClick={() => setNumber(number + 1)}>click number</button>
    </div>
  );
};

export default Practice;

----------------------------------------------------------------------------------------------------

8.useLifecycles hook () (only trigger on mount and unmount)

import { useLifecycles, useTitle } from "react-use";

const Practice = () => {
  useLifecycles(
    () => console.log("MOUNTED"),
    () => console.log("UNMOUNTED")
  );
  return null;
};

export default Practice;

----------------------------------------------------------------------------------------------------

9. useTitle hook () (sets title of the page)
const Practice = () => {
  useTitle("Hello world!");
};
export default Practice;

----------------------------------------------------------------------------------
10. useLockBodyScroll hook () (locks body scroll)

import { useLockBodyScroll } from "react-use";

const Practice = () => {
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);

  return (
    <div>
      <button onClick={() => toggleLocked()}>
        {locked ? "Unlock" : "Lock"}
      </button>
    </div>
  );
};
export default Practice;

----------------------------------------------------------------------------------

 session storage hooks ()

import { useSessionStorage } from "react-use";

const Practice = () => {
  const [value, setValue] = useSessionStorage("my-key", "foo");

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue("bar")}>bar</button>
      <button onClick={() => setValue("baz")}>baz</button>
    </div>
  );
};

export default Practice;

----------------------------------------------------------------------------------------------------

local storage hooks ()

import { useLocalStorage } from "react-use";
const Practice = () => {
  const [value, setValue, remove] = useLocalStorage("my-key", "foo");

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue("bar")}>bar</button>
      <button onClick={() => setValue("baz")}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};

export default Practice;

--------------------------------------------------------------------------------

// Timer

    import * as React from "react";
    import { useBoolean, useInterval } from "react-use";

const Practice = () => {
  const [count, setCount] = React.useState(0);
  const [delay, setDelay] = React.useState(1000);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  return (
    <div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={toggleIsRunning}>
          {isRunning ? "stop" : "start"}
        </button>
      </div>
    </div>
  );
};
export default Practice;

cookies

import { useCookie } from "react-use";

const Practice = () => {
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    deleteCookie();
  }, []);

  const updateCookieHandler = () => {
    updateCookie(`my-awesome-cookie-${counter}`);
    setCounter((c) => c + 1);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <br />
      <button onClick={deleteCookie}>Delete Cookie</button>
    </div>
  );
};

export default Practice;

// 11. Copy to clipboard hook () (copy text to clipboard)

import React from "react";
import { useCopyToClipboard } from "react-use";
const Practice = () => {
  const [text, setText] = React.useState("");
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={() => copyToClipboard(text)}>
        copy text
      </button>
      {state.value && <p>Copied {state.value}</p>}
    </div>
  );
};

export default Practice;

import React from "react";

const Practice = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useUpdateEffect(() => {
    console.log("count", count); // will only show 1 and beyond

    return () => {
      // *OPTIONAL*
      // do something on unmount
    };
  }); // you can include deps array if necessary

  useUpdateEffect(() => {
    console.log("map", count); // will only show 1 and beyond

    return () => {
      // *OPTIONAL*
      // do something on unmount
    };
  }); // you can include deps array if necessary

  return <div>Count: {count}</div>;
};

export default Practice;

import * as React from "react";
import { useMountedState } from "react-use";

const Practice = () => {
  const isMounted = useMountedState();

  const [c, setC] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      if (isMounted()) {
        console.log("mounted");
      } else {
        console.log("unmounted");
      }
    }, 1000);
  });

  return (
    <>
      {c}
      <button onClick={() => setC(c + 1)}>click</button>
    </>
  );
};
export default Practice;

import React, { useRef } from "react";

const Practice = () => {
  const videoRef = useRef(null);

  const handleStartCamera = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  };

  return (
    <div>
      <button onClick={handleStartCamera}>Start Camera</button>
      <video
        ref={videoRef}
        autoPlay
        style={{ width: "100%", maxWidth: "400px" }}
      />
    </div>
  );
};

export default Practice;
