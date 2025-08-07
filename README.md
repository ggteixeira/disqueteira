# disqueteira

Back-end em .NET para organizar discos

## Creating the project, step-by-step:

- Create the GitHub Repository
- Use Visual Studio Code to create a new .NET project from boilerplate
  - `Cmd + Shift + P` and type: ".NET New Project..." and Select "Asp.Net Core Web API"
  - In the options, just change "Controllers" to `true`because we want controllers, but not views — and that's why it isn't a MVC, it's like a RESTful MC.
- Jump to JetBrains Rider, open NuGet and install the following dependencies:
  - Microsoft.AspNetCore.Authentication.JwtBearer
  - Microsoft.AspNetCore.Mvc.NewtonsoftJson
  - Microsoft.AspNetCore.OpenApi
  - Microsoft.EntityFrameworkCore
  - Microsoft.EntityFrameworkCore.Tools
  - Swashbuckle.AspNetCore
  - AutoMapper
  - Microsoft.IdentityModel.Tokens
  - Pomelo.EntityFrameworkCore.MySql (If you have problems, install a prerelease version)
  - Microsoft.EntityFrameworkCore.Proxies (**this one should be installed in the same version of .NET**)
- Delete all boilerplate _cacarecos_:
  - `WeatherForecast.cs`
  - `Controllers/WeatherForecastController.cs`
  - I'm not sure what to do about the contents inside `Disqueteira.http`
- Configure `Program.cs` according to the ones from previous projects.
