package com.github.williamjbf.app.model;

import com.vividsolutions.jts.geom.Point;

import javax.persistence.*;

@Entity
public class Financial {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private double value;
    @Column(columnDefinition = "geography")
    private Point point;
    @ManyToOne
    private TypeFinancial tpe;

    @ManyToOne
    private CategoryFinancial category;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public Point getPoint() {
        return point;
    }

    public void setPoint(Point point) {
        this.point = point;
    }

    public TypeFinancial getTpe() {
        return tpe;
    }

    public void setTpe(TypeFinancial tpe) {
        this.tpe = tpe;
    }

    public CategoryFinancial getCategory() {
        return category;
    }

    public void setCategory(CategoryFinancial category) {
        this.category = category;
    }
}
