coffee_menu = {
    '1': {'name': 'espresso', 'price': 3000},
    '2': {'name': 'black', 'price': 4000},
    '3': {'name': 'latte', 'price': 5000},
    '4': {'name': 'cappuccino', 'price': 5000},
}

total_price = 0

def print_menu():
    print("\n=== coffee ordering system ===")
    for id, coffee in coffee_menu.items():
        print(f"{id}. {coffee['name']} and {coffee['price']}")


while True:
    print_menu()
    choice = input("choose menu: ")
    if choice in coffee_menu:
        total_price += coffee_menu[choice]['price']
        print(f"{coffee_menu[choice]['price']} has been ordered.\n the total price is {total_price}. ")
    elif choice == '5':
        print(f"\nterminated. the total price is {total_price}. ")
        break
    else:
        print("It's wrong choice, please choose again.")
