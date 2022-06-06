package com.github.williamjbf.app.dto;

import com.vividsolutions.jts.geom.Geometry;

public class FinancialDto {

    private long id;
    private String name;
    private double value;
    private Geometry point;
    private long type;
    private long category;

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

    public Geometry getPoint() {
        return point;
    }

    public void setPoint(Geometry point) {
        this.point = point;
    }

    public long getType() {
        return type;
    }

    public void setType(long type) {
        this.type = type;
    }

    public long getCategory() {
        return category;
    }

    public void setCategory(long category) {
        this.category = category;
    }
}
