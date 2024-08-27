"use strict";

//выбор элементов навигация
const ordersBtn = document.querySelector(".orders");
const warehouseBtn = document.querySelector(".warehouse");
const calendarBtn = document.querySelector(".calendar");
const OrderHistoryBtn = document.querySelector(".orders_history");
const CarriersBtn = document.querySelector(".carriers");
const CustomsBtn = document.querySelector(".customs");
const containerBnt = document.querySelector(".container");
const contentOrders = document.querySelector(".contentOrders");
const contentWarehouse = document.querySelector(".contentWarehouse");
const contentCalendar = document.querySelector(".contentCalendar");
const contentOrderHistory = document.querySelector(".contentOrdersHistory");
const contentCarriers = document.querySelector(".contentCarriers");
const contentCustoms = document.querySelector(".contentCustoms");
const contentContainer = document.querySelector(".contentContainer");

//popup
const showCarriersBtn = document.querySelectorAll(".show_carrier");
const hide_carrierBtn = document.querySelector(".hide_carrier");
const b_popup = document.querySelector(".b-popup");

//выбор элементов заказы
/* const orderName = document.querySelector("#_orders-select");
const userName = document.querySelector(".userName");
const adress = document.querySelector(".adress");
const startPoint = document.querySelector(".startPoint");
const endPoint = document.querySelector(".endPoint");
const userNameData = document.querySelector(".userNameData");
const value = document.querySelector(".value");
const weight = document.querySelector(".weight");
const length = document.querySelector(".length");
const height = document.querySelector(".height");
const width = document.querySelector(".width");
const dateOfOrder = document.querySelector(".dateOfOrder");
const price = document.querySelector(".price"); */

/* orderName.addEventListener("change", function (e) {
  let result = orders.find((item) => item.userName == e.target.value);
  console.log(result);
  userName.innerHTML = result.userName;
  adress.innerHTML = result.adress;
  startPoint.innerHTML = result.startPoint;
  endPoint.innerHTML = result.endPoint;
  userNameData.innerHTML = result.userNameData;
  value.innerHTML = result.value;
  weight.innerHTML = result.weight;
  length.innerHTML = result.length;
  height.innerHTML = result.height;
  width.innerHTML = result.width;
  dateOfOrder.innerHTML = result.dateOfOrder;
  price.innerHTML = result.price;
}); */

//переменные

const order1 = {
  userName: "Cecil Ireland", //имя заказчика
  adress: "Kaliningrad", //его адрес
  startPoint: "Moscow", // точка отправления груза
  endPoint: "Kaliningrad", // точка назначения груза
  userNameData: "Inn,OGRN,Other", // реквизиты
  value: 500, //объем груза м3
  weight: 500, // вес груза
  length: 1000, //длина тары
  height: 2000, //высота тары
  width: 3000, //ширина тары
  dateOfOrder: "2024-21-12", //дата заказа
  price: 500, //объявленная стоимость
};
const order2 = {
  userName: "Olga Svetlova", //имя заказчика
  adress: "Kaliningrad", //его адрес
  startPoint: "Kirov", // точка отправления груза
  endPoint: "Baltiisk", // точка назначения груза
  userNameData: "Inn,OGRN,Other", // реквизиты
  value: 500, //объем груза м3
  weight: 2500, // вес груза
  length: 100, //длина тары
  height: 350, //высота тары
  width: 400, //ширина тары
  dateOfOrder: "2022-10-02T14:43:31.074Z", //дата заказа
  price: 2500, //объявленная стоимость
};
const order3 = {
  userName: "Artem Avergian", //имя заказчика
  adress: "Kaliningrad", //его адрес
  startPoint: "St.Pitersburg", // точка отправления груза
  endPoint: "Kaliningrad", // точка назначения груза
  userNameData: "Inn,OGRN,Other", // реквизиты
  value: 2500, //объем груза м3
  weight: 500, // вес груза
  length: 1111, //длина тары
  height: 2222, //высота тары
  width: 3333, //ширина тары
  dateOfOrder: "2022-10-02T14:43:31.074Z", //дата заказа
  price: 40000, //объявленная стоимость
};

const orders = [order1, order2, order3];

//menu

ordersBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contentOrders.classList.remove("hidden");
  contentWarehouse.classList.add("hidden");
  contentCalendar.classList.add("hidden");
  contentOrderHistory.classList.add("hidden");
  contentCarriers.classList.add("hidden");
  contentCustoms.classList.add("hidden");
  contentContainer.classList.add("hidden");
});

warehouseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contentOrders.classList.add("hidden");
  contentWarehouse.classList.remove("hidden");
  contentCalendar.classList.add("hidden");
  contentOrderHistory.classList.add("hidden");
  contentCarriers.classList.add("hidden");
  contentCustoms.classList.add("hidden");
  contentContainer.classList.add("hidden");
});

calendarBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contentOrders.classList.add("hidden");
  contentWarehouse.classList.add("hidden");
  contentCalendar.classList.remove("hidden");
  contentOrderHistory.classList.add("hidden");
  contentCarriers.classList.add("hidden");
  contentCustoms.classList.add("hidden");
  contentContainer.classList.add("hidden");
});

OrderHistoryBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contentOrders.classList.add("hidden");
  contentWarehouse.classList.add("hidden");
  contentCalendar.classList.add("hidden");
  contentOrderHistory.classList.remove("hidden");
  contentCarriers.classList.add("hidden");
  contentCustoms.classList.add("hidden");
  contentContainer.classList.add("hidden");
});

CarriersBtn.addEventListener("click", function (e) {
  e.preventDefault();
  contentOrders.classList.add("hidden");
  contentWarehouse.classList.add("hidden");
  contentCalendar.classList.add("hidden");
  contentOrderHistory.classList.add("hidden");
  contentCarriers.classList.remove("hidden");
  contentCustoms.classList.add("hidden");
  contentContainer.classList.add("hidden");
});

CustomsBtn.addEventListener("click", function (e) {
  contentCustoms;
  e.preventDefault();
  contentOrders.classList.add("hidden");
  contentWarehouse.classList.add("hidden");
  contentCalendar.classList.add("hidden");
  contentOrderHistory.classList.add("hidden");
  contentCarriers.classList.add("hidden");
  contentCustoms.classList.remove("hidden");
  contentContainer.classList.add("hidden");
});

containerBnt.addEventListener("click", function (e) {
  contentCustoms;
  e.preventDefault();
  contentOrders.classList.add("hidden");
  contentWarehouse.classList.add("hidden");
  contentCalendar.classList.add("hidden");
  contentOrderHistory.classList.add("hidden");
  contentCarriers.classList.add("hidden");
  contentCustoms.classList.add("hidden");
  contentContainer.classList.remove("hidden");
});

//button logic

showCarriersBtn.forEach((element) =>
  element.addEventListener("click", function (e) {
    b_popup.classList.remove("hidden");
  })
);

hide_carrierBtn.addEventListener("click", function (e) {
  b_popup.classList.add("hidden");
});
