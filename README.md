# PSCaptureSignature
Simple component to capture signature in a Flow. Original use case was to use in flow within Salesforce mobile. The component will create image file of signature and store on the configured recordId passed to the component.

Steps to use component:
  1. Create a flow (a sample flow is installed with this package called "Capture Signature Sample")
  2. Create a variable named "recordId" in the flow and make sure Input/Output Type is marked "Input Only"
  3. Put Screen element on flow
  4. Add a Lightning Component to the screen element
  5. Configure input for the component:
     - RecordID = {!recordId}
     - Height of signature = <integer value>
     - Width of signature = <integer value>   note: this value is not used as signature window will fill horizontal space

<img src="https://github.com/thedges/PSCaptureSignature/blob/master/PSCaptureSignature.gif" width="350" height="500"></img>

<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>
