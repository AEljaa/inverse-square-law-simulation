function Gravity(x1,x2,y1,y2,m1,m2){
    const G=-6.674*10**7;
    const x_dist=x1-x2;
    const y_dist=y1-y2;
    const r=(x_dist**2+y_dist**2)**0.5;
    const Force=(G*m1*m2)/(r**2);
    return [Force, x_dist , y_dist];

}

