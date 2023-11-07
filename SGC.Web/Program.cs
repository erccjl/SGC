using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection.Extensions;
using SGC.Application.Service;
using SGC.DataAccess.Context;
using SGC.DataAccess.Repository;
using SGC.Domain;
using SGC.Domain.Entities;
using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using SGC.Web.Controllers;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var conectionString = builder.Configuration.GetConnectionString("mysql");

var serverVersion = new MySqlServerVersion(new Version(8, 0, 34));

builder.Services.AddDbContext<ConsorcioContext>(dbConection => dbConection.UseMySql(conectionString, serverVersion));
builder.Services.AddAutoMapper(typeof(Program));


builder.Services.AddScoped<IConsoricioService, ConsorcioService>();
builder.Services.AddScoped(typeof(IRepository<>), typeof(GenericRepository<>));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

//app.MapControllers();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");




app.Run();

